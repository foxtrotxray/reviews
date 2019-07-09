# Project Name

> Reviews Module for B & B mockup

## Related Projects

  - https://github.com/team-200-ok/related-listings
  - https://github.com/team-200-ok/bookings
  - https://github.com/team-200-ok/reviews
  - https://github.com/team-200-ok/gallery-modal-overview

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- MySQL2
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
### Seeding the Database
1. create & use a new database through the sql prompt.

2. in the sql prompt, paste the contents of "database/schemas.sql".

3. change the contents of config/connectionConfig.js to reflect the credentials of your database.

4. "npm run seed" from the "reviews" directory.

5. from the sql prompt, use [SELECT * FROM listings] / [SELECT * FROM reviews] to view all your new data.