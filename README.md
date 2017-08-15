# Clean terminal
### A terminal emulator React component with clean styling (using styled-components) and easy customization

## Why?
So you can show people what terminal commands to use in a pleasant way.

## How?

```jsx

<CleanTerminal>
    <InputStatementLine>echo "<span role="img" aria-label="wave">👋</span> Hello, friend."</InputStatementLine>
    <StatementLine><span role="img" aria-label="wave">👋</span> Hello, friend.</StatementLine>
    <InputStatementLine>ping http://sdgandhi.github.io</InputStatementLine>
    <StatementLine>
        <p>PING sni.github.map.fastly.net (151.101.41.147): 56 data bytes</p>
        <p>64 bytes from 151.101.41.147: icmp_seq=0 ttl=56 time=6.610 ms</p>
        <p>64 bytes from 151.101.41.147: icmp_seq=1 ttl=56 time=6.603 ms</p>
    </StatementLine>
</CleanTerminal>

```

![Example 1](https://raw.githubusercontent.com/sdgandhi/clean-terminal/master/example/example1.png)

## What?
It's a [React](https://facebook.github.io/react/) component!

## Who?
[Me!](http://sidhantgandhi.com)
