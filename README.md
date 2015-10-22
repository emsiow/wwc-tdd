# WWC TDD Workshop

## Project Structure

Each project has two main directories: 
- spec: contains the spec (tests) 
- src: contains the implementation 

To run the tests, open SpecRunner.html in your browser. 

## Code Coverage
You can use Karma with Jasmine to check for the code coverage of your test suite. This is not essential for the workshop, but can be done in your own time to get used to refactoring tests. 
### Instructions  
Install the necessary plugins for code coverage: 

```
cd path_to_repo
npm install -g karma karma-coverage phantomjs karma-phantomjs-launcher karma-jasmine --save-dev 
npm install
```
To check what the code coverage is:
```
cd path_to_project
karma start my.conf.js
```

