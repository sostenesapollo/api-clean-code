# clean-code-api
 
- TDD
- UseCases -> Business Rules
- Classes Should be Independent
- Clean Architecture
- Dependency Injection
---------

# Layers
### Presentation
- Router
### Domain
- UseCase
### Infra
- Repository
### Helpers
- Adapters

##### Status Code
- 400 -> Bad Request
- 200 -> OK
- 401 -> Unauthorized -> User not found in database
- 403 -> Forbidden -> User not allowed to access this resource

##### SUT -> System Under Test
## Tests
- Status code when params not provided
