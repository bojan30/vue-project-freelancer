<template>
    <div class="project">
      <div class="container-fluid">
        <div class="project-upper">
          <Dropdown />
          <button class = "btn btn-primary">Start</button>
        </div>
        <div class="project-lower">
          <input class = "single-url-input" type="text" placeholder="input single url">
          <button class = "add-multiple">Or, add multiple urls</button>
        </div>
      </div>
    </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue';

export default {
  name: 'Project',
  components: {
    Dropdown
  }
}
</script>
<style scoped>
  .project{
    width: 40%;
    /* background-color: #333; */
    height: calc(100vh - 64.4px);
    padding: 1rem 0;
    border-right: 0.05rem solid rgba(0,0, 0, 0.2);
  }
  .project-upper{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .project-lower{
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
  }
  .single-url-input{
    outline: none;
    border: none;
    border: 2px solid rgba(0,0,0,0.1);
    border-radius: 0.4rem;
    padding: 0.5rem;
    flex: 1;
    transition: border 0.2s linear;
  }
  .single-url-input:focus{
    border: 2px solid #007bff;
  }
  .add-multiple{
    color: #007bff !important;
    margin-top: 0.5rem;
    cursor: pointer;
    align-self: flex-start;
    background-color: transparent;
    border: none;
    outline: none;
    padding-left: 0;
  }
</style>