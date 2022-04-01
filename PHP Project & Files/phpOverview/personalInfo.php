<?php include '../../header.php' ?>
<section id="mainSection">
    <div class="row">
        <?php include '../sidebar.php' ?>
        <div class="main phpinfo">
            <div class="row justify-content-center">
                <div class="card">
                    <div class="card-header">Display Strings</div>
                    <div class="card-body">
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-4">
                                <div class="card">
                                    <div class="card-header text-center">Details</div>
                                    <div class="card-img text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" style="width: 200px; height: 200px; opacity: .5;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div class="card-body">
                                        <?php
                                           /*
                                            - echo will print the name and email address and 
                                            - will merger the , seprated statements 
                                           */
                                           echo "<p> Name : Darshit Busa </p>", "<p> Email : darshit.busa@gmail.com </p>";
                                          
                                           // Print Statement will display department   
                                           print "<p> Department : Computer </p>";
                                        ?>
                                    </div>
                                    <div class="card-footer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php include '../../footer.php' ?>