'use strict';

const fs = require('node:fs');
const path = require('node:path');

function writePathsToFile(result, target) {
    const date = new Date();
    const filename = `unvisited-${date.toISOString().replaceAll(':', '-')}.json`;
    const dirpath = path.resolve(__dirname, `../../../reports/templateCoverage/${target}`);
    const filepath = path.join(dirpath, filename);

    fs.mkdirSync(dirpath, {recursive: true});

    fs.writeFileSync(
        filepath,
        JSON.stringify({
            unvisitedCount: result.length,
            paths: result
        })
    );
}

function isFallThrough(template, sourceId, targetId) {
    const targetDefs = template?.routes?.states?.[sourceId]?.on?.ANSWER || [];
    const lastTargetDef = targetDefs.at(-1);
    const targetCount = targetDefs.length;

    if (
        targetCount > 1 &&
        lastTargetDef.target === targetId &&
        Object.hasOwn(lastTargetDef, 'cond') === false
    ) {
        return true;
    }

    return false;
}

function getUnvisitedPaths(template, traversalState, ignoreStates = ['system', 'owner', 'origin']) {
    const states = Object.keys(template.routes.states).reduce((acc, task) => {
        if (task.includes('__')) {
            // skip the applicability tasks
            return acc;
        }
        return Object.assign(acc, template.routes.states[task].states);
    }, {});
    return Object.keys(states).reduce((acc, stateId) => {
        if (ignoreStates.includes(stateId)) {
            return acc;
        }

        if (traversalState.allTargetIds.has(stateId) === false) {
            acc.push(`?,${stateId}`);

            return acc;
        }

        traversalState.stateTargetIds.get(stateId).forEach(targetId => {
            const fallThrough = isFallThrough(template, stateId, targetId);

            if (fallThrough === true) {
                acc.push(`${stateId},${targetId} (UNREACHABLE FALL THROUGH?)`);
            } else {
                acc.push(`${stateId},${targetId}`);
            }
        });

        return acc;
    }, []);
}

function getAllTargets(state) {
    const targets = state?.on?.ANSWER || [];
    const targetIds = targets.map(targetDefinition => targetDefinition.target);

    return new Set(targetIds);
}

function createStateTracker(template) {
    const initialStates = [];
    Object.keys(template.routes.states).forEach(task => {
        if (task.includes('__')) {
            // skip the applicability tasks
            return;
        }
        initialStates.push(template.routes.states[task].initial);
    });

    const states = Object.keys(template.routes.states).reduce((acc, task) => {
        if (task.includes('__')) {
            // skip the applicability tasks
            return acc;
        }
        return Object.assign(acc, template.routes.states[task].states);
    }, {});
    const stateTargetIds = new Map();
    const allTargetIds = new Set(initialStates);
    let allPairsCount = 0;

    Object.keys(states).forEach(stateId => {
        const state = states[stateId];
        const targetIds = getAllTargets(state);

        allPairsCount += targetIds.size;
        stateTargetIds.set(stateId, targetIds);
        targetIds.forEach(targetId => allTargetIds.add(targetId));
    });

    return {
        stateTargetIds,
        allTargetIds,
        allPairsCount
    };
}

module.exports = {
    createStateTracker,
    getUnvisitedPaths,
    writePathsToFile
};
