# 🥒 Rick 

> An extended _gherkin_ parser to extract test scenarios from annotated documentations.

## Syntax

### Example

```markdown
   
 # <!-- Feature: --> Quick Start
 
 ## <!-- Scenario: --> Install Kafka Cluster
 
 Given that you've installed the dcos cli 
 <!-- When you -> run the following command to install Kafka. 
 Otherwise you can use the user interface or follow the instructions on URL to install the  CLI.
 
 <!-- (command) -->
 dcos package install kafka

 
 <!--Then Kafka should start -->
```

### AST

### Example

```json
  {
  	"type": "PickleDocument",
  	"feature": {
  		"type": "Feature",
  		"tags": [],
  		"location": {
  			"line": 1,
  			"column": 1
  		},
  		"language": "en",
  		"keyword": "Feature",
  		"name": "Quick Start",
  		"children": [{
  			"type": "Scenario",
  			"tags": [],
  			"location": {
  				"line": 3,
  				"column": 1
  			},
  			"keyword": "Scenario",
  			"name": "Install Kafka Cluster",
  			"input": {
  				"command": "dcos package install kafka"
  			},
  			"steps": [{
  					"type": "Step",
  					"location": {
  						"line": 4,
  						"column": 1
  					},
  					"keyword": "Given ",
  					"text": "that you've installed the dcos cli"
  				},
  				{
  					"type": "Step",
  					"location": {
  						"line": 5,
  						"column": 1
  					},
  					"keyword": "When ",
  					"text": "you  run the following command to install Kafka."
  				},
  				{
  					"type": "Step",
  					"location": {
  						"line": 6,
  						"column": 1
  					},
  					"keyword": "Then ",
  					"text": "Kafka should start"
  				}
  			]
  		}]
  	},
  	"comments": []
  }

```

## TODO s

1. Create method to remove _all_ Markdown annotations 
    N.B. It might be save to only remove comments, headlines and code)
2. Extend Gherkin parser to ignore all lines 
    that don't start with the respective symbols
3. Extend the Gherkin language for a more vibrant and natural language
   * Given: Given, Assuming, Granted 
   * When: When, Use, Click, Run, Execute
