export default function Home() {
return ( <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden"> <div className="absolute inset-0 opacity-40">
{[...Array(80)].map((_, i) => (
<div
key={i}
className="absolute bg-white rounded-full animate-pulse"
style={{
width: Math.random() * 3 + 'px',
height: Math.random() * 3 + 'px',
top: Math.random() * 100 + '%',
left: Math.random() * 100 + '%',
}}
/>
))} </div>

```
  <div className="z-10 text-center px-6">
    <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs mb-8">
      private story archive
    </p>

    <h1 className="text-5xl md:text-7xl font-light leading-tight">
      Некоторые истории
      <br />
      начинаются слишком
      <br />
      незаметно.
    </h1>

    <p className="mt-10 text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
      Например — с обычного разговора ночью.
    </p>

    <button className="mt-14 border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition-all duration-500">
      начать
    </button>

    <p className="mt-20 text-zinc-600 text-sm tracking-widest">
      for elina
    </p>
  </div>
</main>
```

);
}
