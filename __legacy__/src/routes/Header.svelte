<script lang="ts">
  import IconCoffee from '$lib/images/coffee.svg';
  import IconBook from '$lib/images/book.svg';
  import IconDeviceGamepad2 from '$lib/images/device-gamepad-2.svg';

</script>


<div class="navbar bg-base-100">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl" href="/">
  	  uno chan demo site
    </a>
    <p>with unocess animations</p>
  </div>
  
  <div class="navbar-end">
    <p class="font-bold">寄付してください！ </p>
    <a href={''} class="btn btn-ghost btn-circle">
      <img src={IconCoffee} alt="coffee" />
    </a>
    <a href={''} class="btn btn-ghost btn-circle">
      <img src={IconBook} alt="book" />
    </a>
    <a href={''} class="btn btn-ghost btn-circle">
      <img src={IconDeviceGamepad2} alt="gamepad" />
    </a>
  </div>
</div>

<style>
</style>
