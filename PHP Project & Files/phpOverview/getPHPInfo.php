<?php include '../../header.php' ?>
<section id="mainSection">
    <div class="row">
        <?php include '../sidebar.php' ?>
        <div class="main phpinfo">
            <div class="row justify-content-center">
                <div class="card">
                    <div class="card-header">PHP Information</div>
                    <div class="card-body">
                        <?php 
                        echo phpinfo(4); 
                        ?>
                    </div>
                    <div class="card-footer text-center">PHP Version <?php echo phpversion(); ?></div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php include '../../footer.php' ?>