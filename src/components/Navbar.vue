<template>
    <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to = "/"  class="nav-link nav-link-custom" href="#"><i class="fas fa-cube"></i> Project <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to = "/headers" class="nav-link nav-link-custom" href="#"><i class="fas fa-bars"></i> Headers</router-link>
      </li>
      <li class="nav-item">
        <router-link to = "/export" class="nav-link nav-link-custom" href="#"><i class="far fa-file"></i> Export</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-link-custom" href="#"><i class="far fa-user"></i> Session</a>
      </li>
      <li class="nav-item">
        <button class="btn btn-custom" href="#">Our IP Address</button>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <a class="mr-sm-2 feedback nav-link-custom">Send your feedback</a>
      <button class="btn my-2 my-sm-0 notification-btn" type="submit">
          <i class="far fa-bell"></i>
      </button>
    </form>
  </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar-custom{
        box-shadow: 0px 0px 1px rgba(0,0,0,0.6);
        padding: 0; 
    }
    .nav-link-custom{
        color: #333;
        padding: 1.2rem 1.5rem !important;
        display: flex;
        align-items: center;
    }
    .nav-link-custom i {
        margin-right: 0.4rem;
        font-size: 1.4rem;
    }
    .router-link-exact-active{
        border-bottom: 2px solid #007bff;
    }
    .btn-custom{
        margin-top: 0.8rem;
        background-color: #f2f2f2;
    }
    .feedback{
        text-decoration: underline !important;
    }
    .notification-btn{
        background-color: transparent;
        position: relative;
    }
    .notification-btn i {
        font-size: 1.4rem;
    }
    .notification-btn:after{
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        top: 15%;
        right: 22%;
        background-color: #999;
        border-radius: 50%;
    }
</style>
