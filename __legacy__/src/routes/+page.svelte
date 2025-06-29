<script lang="ts">
	import AnimationCard from "./AnimationCard.svelte";
	import Animations from "./Animations.svelte";

  let animations: string[] = [
	"fadeIn",
    "fadeOut",
    "slideIn",
    "slideOut",
    "bounce",
    "wiggle",
    "shake",
    "zoomIn",
    "zoomOut",
    "rotate",
    "spin",
    "flip",
    "pulse",
    "flash",
    "rubberBand",
    "jello",
    "swing",
    "hinge",
    "tada",
    "bounceIn",
    "bounceOut",
    "flipInX",
    "flipOutX",
    "flipInY",
    "flipOutY",
    "lightSpeedIn",
    "lightSpeedOut",
    "rollIn",
    "rollOut",
    "fadeInDown",
    "fadeInUp",
    "fadeInLeft",
    "fadeInRight",
    "fadeOutDown",
    "fadeOutUp",
    "fadeOutLeft",
    "fadeOutRight",
    "bounceInDown",
    "bounceInUp",
    "bounceInLeft",
    "bounceInRight",
    "bounceOutDown",
    "bounceOutUp",
    "bounceOutLeft",
    "bounceOutRight",
    "zoomInDown",
    "zoomInUp",
    "zoomInLeft",
    "zoomInRight",
    "zoomOutDown",
    "zoomOutUp",
    "zoomOutLeft",
    "zoomOutRight",
  ]
</script>

<div class="min-h-screen flex flex-col items-center justify-center space-y-20">
  <div class="mockup-code w-full max-w-3xl">
    <pre><code>
      {`animate-{アニメーション名}-{回数|infnite}-1500ms`}
    </code></pre>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl">
	  <Animations />
  </div>
</div>