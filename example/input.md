# <!-- Feature: --> Quick Start

> For the original documentation please see https://github.com/mesosphere/dcos-commons/blob/0.30.X/frameworks/kafka/docs/quick-start.md

## <!-- Scenario: --> Install Kafka Cluster

Given that you've installed the dcos cli 
run the following command to install Kafka. 
Otherwise you can use the user interface or follow the instructions on URL to install the  CLI.

```bash (command)
dcos package install kafka
```

<!--Then Kafka should start -->

## <!-- Scenario: --> Install Kafka Cluster

> Prerequisites: This article assumes that you've a running cluster, installed and configured the `dcos` cli.

Run the following command to install Kafka. 

```bash (install)
dcos package install kafka
```

<!-- Expect: --> After a few miniutes your Kafka cluster should be up and running. 
You can use the following command to verify:

```bash (verify)
dcos kafka helth
```

## <!-- Scenario: --> Create a Topic

Assuming that you've successfully installed Kafa 
use the following command to create a new topic

```bash (command)
dcos kafka topic create topic1
```
 
<!-- Then a new kafka topic should have been created -->
