export default function HeavyComponent() {
    const items = [];
    for (let i = 0; i < 2000; i++) {
        items.push(<li key={i}>Item {i}</li>)
    }
    // Simulate some complex rendering logic
    const complexMarkup = [];
    for (let i = 0; i < 100; i++) {
        complexMarkup.push(<div key={i}>{items}</div>)
    }
    return (
        <>
            <h1>Heavy Component</h1>
            {/* Render the complex markup */}
            {complexMarkup}
        </>
    )
}
// Caso esse componente seja importado e chamado normalmente, custará um tempo maior para ser renderizado.