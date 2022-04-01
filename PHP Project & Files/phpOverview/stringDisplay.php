<?php include '../../header.php' ?>
<section id="mainSection">
    <div class="row">
        <?php include '../sidebar.php' ?>
        <div class="main phpinfo">
            <div class="row justify-content-center">
                <div class="card">
                    <div class="card-header">Display Strings</div>
                    <div class="card-body">
                        <p class="fw-bold">String</p>
                        <p>
                            <?php
                            echo "We've learned basic PHP. We are going to develop a basic application.<br/>";
                            echo 'You are at C:\\\\';
                            ?>
                        </p>
                        
                        <p class="fw-bold">Output</p>
                        <p>
                        <?php
                            echo "We've learned basic PHP. <br/> We are going to develop a basic application. <br/>";
                            echo 'You are at C:\\\\';
                        ?>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php include '../../footer.php' ?>