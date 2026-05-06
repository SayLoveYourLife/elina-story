export default function StoryPage() {
return (
<main
style={{
minHeight: "100vh",
background:
"linear-gradient(to bottom, #050510, #0f172a, #111827)",
color: "white",
display: "flex",
justifyContent: "center",
alignItems: "center",
flexDirection: "column",
textAlign: "center",
padding: "30px",
fontFamily: "sans-serif",
}}
>
<p
style={{
color: "#94a3b8",
letterSpacing: "5px",
textTransform: "uppercase",
fontSize: "12px",
}}
>
chapter 01 </p>


  <h1
    style={{
      fontSize: "58px",
      fontWeight: "300",
      marginTop: "20px",
      lineHeight: "1.2",
    }}
  >
    Улица
    <br />
    воспоминаний
  </h1>

  <p
    style={{
      marginTop: "40px",
      maxWidth: "700px",
      color: "#cbd5e1",
      lineHeight: "1.8",
      fontSize: "20px",
    }}
  >
    Той ночью никто из нас
    <br />
    не собирался говорить 3 часа.
    <br />
    <br />
    Но именно тогда
    <br />
    всё начало идти не по плану.
  </p>

  <div
    style={{
      marginTop: "60px",
      border: "1px solid #334155",
      padding: "20px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.03)",
      maxWidth: "500px",
    }}
  >
    <p
      style={{
        color: "#94a3b8",
        marginBottom: "10px",
      }}
    >
      найдено воспоминание:
    </p>

    <p
      style={{
        fontSize: "22px",
      }}
    >
      «Остерегайся девушки
      <br />
      с огромным лбом»
    </p>
  </div>
</main>


);
}
