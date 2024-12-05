# Stale Closure Bug in React's useEffect Hook

This repository demonstrates a common bug in React applications involving the `useEffect` hook and `setInterval`. The bug arises from a stale closure within the `setInterval` callback, leading to unexpected behavior.

## Bug Description

The `MyComponent` component uses `useEffect` to update a count every second. However, due to the stale closure, the `count` variable inside the `setInterval` callback always refers to its initial value (0), resulting in the counter never updating correctly.

## Solution

The solution involves using a functional update within the `setCount` function. This ensures that the `count` variable always refers to the latest value.