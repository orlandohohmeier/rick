# <!-- Feature: --> Quick Start

> For the original documentation please see https://github.com/mesosphere/dcos-commons/blob/0.30.X/frameworks/kafka/docs/quick-start.md

## <!-- Scenario: --> Install Kafka Cluster

Given that you've installed the dcos cli 
<!-- When you -> run the following command to install Kafka. 
Otherwise you can use the user interface or follow the instructions on URL to install the  CLI.

<!-- (command) -->
```bash
dcos package install kafka
```

<!--Then Kafka should start -->

## <!-- Scenario: --> Create a Topic

Given that you've successfully installed kafa 
<!-- When you -> use the following command to create a new topic

<!-- (command) -->
```bash
dcos kafka topic create topic1
created successful 
```
 
<!--Then a new kafka topic should have been created -->
