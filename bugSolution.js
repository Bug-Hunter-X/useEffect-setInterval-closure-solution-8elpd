```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Correct approach
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
```