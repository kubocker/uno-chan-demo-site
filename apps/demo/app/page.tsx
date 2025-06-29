import AnimationCard from "../components/AnimationCard";

export default function Home() {
  const animations = [
    "fadeIn", "fadeOut", "slideIn", "slideOut", "bounce", "wiggle", "shake",
    "zoomIn", "zoomOut", "rotate", "spin", "flip", "pulse", "flash",
    "rubberBand", "jello", "swing", "hinge", "tada", "bounceIn", "bounceOut",
    "flipInX", "flipOutX", "flipInY", "flipOutY", "lightSpeedIn", "lightSpeedOut",
    "rollIn", "rollOut", "fadeInDown", "fadeInUp", "fadeInLeft", "fadeInRight",
    "fadeOutDown", "fadeOutUp", "fadeOutLeft", "fadeOutRight", "bounceInDown",
    "bounceInUp", "bounceInLeft", "bounceInRight", "bounceOutDown", "bounceOutUp",
    "bounceOutLeft", "bounceOutRight", "zoomInDown", "zoomInUp", "zoomInLeft",
    "zoomInRight", "zoomOutDown", "zoomOutUp", "zoomOutLeft", "zoomOutRight",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold my-8">
          UnoCSS Animations
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {animations.map((anim) => (
            <AnimationCard key={anim} animationName={anim} />
          ))}
        </div>
      </main>
    </div>
  );
}