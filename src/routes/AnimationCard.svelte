<script lang="ts">
  export let title: string;
</script>

<div>
  <h2 class="font-bold text-center mb-2">{title}</h2>
  <div class="card bg-[#eff6ff] w-80 aspect-[3/2] shadow-xl mx-auto">
    <div class="card-body flex items-center justify-center text-center text-[#1e40af]">
      <div class={`animate-flipOutY-infinite-1500ms text-red font-20 font-bold text-6xl`}>⚫︎</div>
    </div>
  </div>
</div>