# Logger Usage Guide

## Overview

This guide provides a step-by-step explanation of how to use the Lucas Melo Logger library. Each section describes a specific functionality along with code examples.

## Installation

Install the logger library using npm:

```bash
npm install @lucas-pmelo/logger
```

## Usage

### Resetting Log Configurations

To reset the logger's configurations:

```javascript
logger.reset();
```

### Setting Log Level

To set the log level, available options are: `"trace"`, `"debug"`, `"info"`, `"warn"`, and `"error"`. The default level is `"trace"`.

```javascript
logger.setLevel("debug");
```

### Setting Service Name

To set the service name:

```javascript
logger.setService("self-service");
```

### Setting Request ID

To set the request ID:

```javascript
logger.setRequestId("123");
```

### Setting HTTP Request

To set HTTP request details:

```javascript
logger.setHttp("POST", "http://localhost:400", "localhost");
```

### Setting User Information

To set user information:

```javascript
logger.setUser("id", "email");
```

### Retrieving Logger Configurations

To get the current logger configuration:

```javascript
logger.getConfig();
```

### Logging Messages

- **Trace Log**:

  ```javascript
  logger.trace({
    message: "trace log",
  });
  ```

- **Debug Log**:

  ```javascript
  logger.debug({
    message: "debug log",
  });
  ```

- **Info Log**:

  ```javascript
  logger.info({
    message: "info log",
  });
  ```

- **Warn Log**:

  ```javascript
  logger.warn({
    message: "warn log",
  });
  ```

- **Error Log**:

  ```javascript
  logger.error({
    message: "error log",
  });
  ```
