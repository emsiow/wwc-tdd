# WWC TDD Workshop
## Code Coverage
You can use Karma with Jasmine to check for the code coverage of your test suite. 
### Instructions  
Install the necessary plugins for code coverage: 

```
cd path_to_repo
npm install -g karma karma-coverage phantomjs karma-phantomjs-launcher karma-jasmine --save-dev 
npm install
```
To check what the code coverage is:
```
karma start my.conf.js
```

