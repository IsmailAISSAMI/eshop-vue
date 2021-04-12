<template>
    <div class="wrapper user__lambda__sidbar">
             <ul class="list-unstyled components">
                <p>
                    Welcome {{user.firstName}}
                </p>
                
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-users"></i>
                        Users
                    </a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <router-link class="nav__link" to="/admin/users/all">
                                <i class="fas fa-angle-double-right"></i>
                                List
                            </router-link>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-pen-alt"></i>
                                Update
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-plus-circle"></i>
                                Create
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-search"></i>
                                Search
                            </a>
                        </li>
                        
                    </ul>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-shopping-cart"></i>
                        Products
                    </a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <router-link class="nav__link" to="/Admin/products/all">
                               <i class="fas fa-angle-double-right"></i>
                                List
                            </router-link>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-pen-alt"></i>
                                Update
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-plus-circle"></i>
                                Create
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-search"></i>
                                Search
                            </a> 
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-trash-alt"></i>
                                Delete
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Link1</a>
                </li>
                <li>
                    <a href="#">Link2</a>
                </li>
            </ul>
        </div>
</template>

<script>
    export default {
        props: {
            user: Object
        },
        data: function() {
            return {
                user:{}
            }
        }
    }
</script>

<style lang="scss" scoped>
    $background-main-color:#2f3f53;
    $secondary-color: #475e7a;
    $link-color: #fff;

        .user__lambda__sidbar{
            background-color: $background-main-color;
            padding: 0 20px;

            p {
                font-family: 'Poppins', sans-serif;
                text-align: center;
                font-size: 1.1em;
                font-weight: 600;
                line-height: 1.7em;
                color: $link-color;
                border-bottom: 1px solid #fff;
            }


            a, a:hover, a:focus {
                color: inherit;
                text-decoration: none;
                transition: all 0.3s;
            }


            ul.components {
                border-bottom: 1px solid #fff;
            }

            ul p {
                color: #fff;
                padding: 10px;
            }

            ul li a {
                padding: 10px;
                font-size: 1.1em;
                display: block;
                color: $link-color;
            }
            ul li a:hover {
                color: #7386D5;
                background: #fff;
            }

            ul li.active > a, a[aria-expanded="true"] {
                color: #fff;
                background: $secondary-color;
            }
            ul ul a {
                font-size: 0.9em !important;
                padding-left: 30px !important;
                background: $secondary-color;
            }
        }
</style>