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

<div class="min-h-screen flex items-center justify-center">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl">
	<Animations />
  </div>
</div>