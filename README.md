# `q-templates-application`
[![GitHub repo size](https://img.shields.io/github/repo-size/CriminalInjuriesCompensationAuthority/q-templates-application)](https://github.com/CriminalInjuriesCompensationAuthority/q-templates-application)
[![GitHub repo version](https://img.shields.io/github/package-json/v/CriminalInjuriesCompensationAuthority/q-templates-application)](https://github.com/CriminalInjuriesCompensationAuthority/q-templates-application/releases/latest)
[![GitHub repo npm version](https://img.shields.io/badge/npm_version->=8.5.2-blue)](https://github.com/CriminalInjuriesCompensationAuthority/q-templates-application/blob/master/package.json#L7)
[![GitHub repo node version](https://img.shields.io/badge/node_version->=16.0.0-blue)](https://github.com/CriminalInjuriesCompensationAuthority/q-templates-application/blob/master/package.json#L8)
[![GitHub repo contributors](https://img.shields.io/github/contributors/CriminalInjuriesCompensationAuthority/q-templates-application)](https://github.com/CriminalInjuriesCompensationAuthority/q-templates-application/graphs/contributors)
[![GitHub repo license](https://img.shields.io/github/package-json/license/CriminalInjuriesCompensationAuthority/q-templates-application)](https://github.com/CriminalInjuriesCompensationAuthority/q-templates-application/blob/master/LICENSE)


The `q-templates-application` module builds and serves the application JSON that is used for any given application for compensation. `q-templates-application` is a dependency of the [Data Capture Service API](https://github.com/CriminalInjuriesCompensationAuthority/data-capture-service). 

## Prerequisites
* Windows machine running docker desktop.
* You have Node Version Manager (NVM) installed globally. <sup>(_recommended, not required_)</sup>
* You have NPM `">=8.5.2"` installed globally.
* You have Node `">=16.0.0"` installed globally.
* You have the Postgres `create-tables.sql` file in a sibling directory named `postgres-scripts` (this mapping is defined in the `docker-compose.yml` file)

## Installing `q-templates-application`

Clone the `q-templates-application` repo, and `npm install`. This is not required to run the web app, this step would be carried out if you were doing development work and updating the template.

## Using `q-templates-application`
`q-templates-application` is a dependency of the [Data Capture Service API](https://github.com/CriminalInjuriesCompensationAuthority/data-capture-service) and it will be installed and used at run time by the Data Capture Service.

If you are modifying the `q-templates-application`, it should be mounted via the `docker-compose.yml`. After mounting, you should `down`, `build`, and `up` to create a clean set up.

In order for template changes to take affect within the Data Capture Service, you need to run the command below in a shell:

`npm run dev`

This will ensure that any changes made will cause the distributed JSON to be rebuilt and then the Data Capture Service will see those changes.

> Full instructions on the required directory structure and configuration is found in the `Docker-compose-setup-for-CW,-DCS,-Postgres` Utilities Wiki article <sup>(_private repo_)</sup>.

## Contributors
Thanks to the following people who have contributed to this project:
* [@armoj](https://github.com/armoj)
* [@neil-stephen-mcgonigle](https://github.com/neil-stephen-mcgonigle)
* [@BarryPiccinni](https://github.com/BarryPiccinni)
* [@sinclairs](https://github.com/sinclairs)
* [@stephenjmcneill1971](https://github.com/stephenjmcneill1971)
* [@tjbburton](https://github.com/tjbburton)


## License
This project uses the following license: MIT.
