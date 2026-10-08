import { useEffect, useRef } from "react";
import "./App.css";
import ChooseFlavor from "./components/ChooseFlavor";
import ProductShowcase from "./components/ProductShowcase";
import MoreThanGym from "./components/FormulaProducts";
import FormulaProducts from "./components/FormulaProducts";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let points = [];
    let mouseX = -100;
    let mouseY = -100;
    let animationFrame;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      points.push({
        x: mouseX,
        y: mouseY,
        life: 1,
      });

      // Keep only recent path
      if (points.length > 35) {
        points.shift();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fade old points
      points.forEach((point) => {
        point.life -= 0.025;
      });

      points = points.filter((point) => point.life > 0);

      // Draw actual mouse path
      if (points.length > 1) {
        ctx.beginPath();

        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length - 1; i++) {
          const current = points[i];
          const next = points[i + 1];

          const centerX = (current.x + next.x) / 2;
          const centerY = (current.y + next.y) / 2;

          ctx.quadraticCurveTo(
            current.x,
            current.y,
            centerX,
            centerY
          );
        }

        const last = points[points.length - 1];

        ctx.lineTo(last.x, last.y);

        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.75)";
        ctx.stroke();
      }

      // Draw white dot
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 7.5, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();

      animationFrame = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="page">

      <canvas
        ref={canvasRef}
        className="cursor-canvas"
      />

      <header className="navbar">
        <img
          className="logo"
          src="/assets/lesgoLogo.png"
          alt="LESGO"
        />

        <nav className="nav-links">
          <a href="#shop">SHOP</a>
          <a href="#why">WHY LESGO</a>
          <a href="#formula">FORMULAS</a>
          <a href="#contact">CONTACT US</a>
        </nav>

        <div className="cart">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
            <circle cx="10" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>
        </div>
      </header>

      <main className="hero">

        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/assets/lesgo-video.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            Start your day.
            <br />
            Hit go.
          </h1>

          <button>SHOP LESGO</button>
        </div>

      </main>
      <ChooseFlavor />
      <ProductShowcase />
      <FormulaProducts />
    </div>
  );
}

export default App;