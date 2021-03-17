<template>
    <div class="user__lambda__main">
        <div class="wrapper user__lambda__sidbar">
             <ul class="list-unstyled components">
                <p>Dummy Heading</p>
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
        <div class="user__lambda__content">
            <Alert className="alert__success" errorMessage="je suis admin!"/>
        </div>
        <!-- <div class="user__info">
                <p>Nom :{{user.firstName}}</p>
                <p>Prénom :{{user.lastName}}</p>
                <p>Email :{{user.email}}</p>
                <button @click="logout">Se déconnecter</button>
        </div> -->
    </div>
</template>

<script>
    import Alert from "../../components/Alert";
    export default {
        components: {
            Alert
        },
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

    .user__lambda__main{
        width: 100vw;        
        display: flex;
        flex-direction: row;
        .user__lambda__sidbar{
            background-color: #2f3f53;

            p {
                font-family: 'Poppins', sans-serif;
                font-size: 1.1em;
                font-weight: 300;
                line-height: 1.7em;
                color: #999;
            }

            a, a:hover, a:focus {
                color: inherit;
                text-decoration: none;
                transition: all 0.3s;
            }

            #sidebar {
                /* don't forget to add all the previously mentioned styles here too */
                background: #7386D5;
                color: #fff;
                transition: all 0.3s;
            }

            #sidebar .sidebar-header {
                padding: 20px;
                background: #6d7fcc;
            }

            #sidebar ul.components {
                padding: 20px 0;
                border-bottom: 1px solid #47748b;
            }

            #sidebar ul p {
                color: #fff;
                padding: 10px;
            }

            #sidebar ul li a {
                padding: 10px;
                font-size: 1.1em;
                display: block;
            }
            #sidebar ul li a:hover {
                color: #7386D5;
                background: #fff;
            }

            #sidebar ul li.active > a, a[aria-expanded="true"] {
                color: #fff;
                background: #6d7fcc;
            }
            ul ul a {
                font-size: 0.9em !important;
                padding-left: 30px !important;
                background: #6d7fcc;
            }
        }

        .user__lambda__content{
            margin-left: 5vw;
        }
    
    }


</style>