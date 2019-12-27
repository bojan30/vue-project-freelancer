<template>
    <div class = "dropdown">
        <div class ="close-dropdown-overlay"></div>
        <div class = "dropdown-header">
                <div class = "currency">                     
                <span>All urls</span>
                </div>
                <i class = "fas fa-angle-down"></i>
        </div>
        <ul class = "dropdown-menu">
            <li>
                option one
            </li>
        
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Dropdown',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown{
    position: relative;
    flex: 1;
    margin-right: 1rem;
}
.dropdown .dropdown-header{
    padding: 0.5rem;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid rgba(0,0,0,0.1);
    border-radius: 0.4rem;
    cursor: pointer;
    z-index: 1;
}
.dropdown .dropdown-menu{
    position: absolute;
    width: 100%;
    z-index: 100;
    box-shadow: 0px 0px 2px #666;
    background-color: #f7f7f7;
    border-radius: 0.2rem;
    overflow: hidden;
    height: 128px;
    overflow-y: scroll;
}
.dropdown .dropdown-menu li{
    padding: 0.4rem;
    cursor: pointer;
    display: flex;
    align-items: center;
}
.dropdown .dropdown-menu li:hover{
    background-color: #228d57;
    color: #fff;
}
.dropdown .dropdown-header i {
    transition: transform 0.2s linear;
}
.dropdown .dropdown-header i.active{
    transform: rotate(180deg);
}
</style>
