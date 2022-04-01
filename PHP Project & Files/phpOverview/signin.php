<?php include '../../header.php' ?>
<section id="mainSection">
    <div class="row">
        <?php include '../sidebar.php' ?>
        <div class="main phpinfo">
            <div class="row justify-content-center mt-2">
                <div class="col-sm-12 col-md-4 shadow">
                    <div class="card">
                        <div class="card-header"></div>
                        <div class="card-body">
                            <form action="" onsubmit="return validateAllLogin('username','password','resForm')">
                                <div class="row">
                                    <h1 class="text-center">Login</h1>
                                </div>
                                <div class="row justify-content-center mt-3">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="username">Username</label>
                                            <input type="text" name="username" id="username" class="form-control" placeholder="Username" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center mt-3">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="password">Password</label>
                                            <input type="text" name="password" id="password"  class="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-center mt-3">
                                    <small class="text-danger text-center" id="resForm"></small>
                                    <button class="btn btn-primary w-auto mt-2" type="submit"> Login </button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer text-center">
                            <small class="text-muted fw-bold">Don't Have Account? <a href="signup.php" class="text-text-decoration-none text-primary">Register</a> </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script src="<?php echo $path . 'assets/js/validation.js' ?>"></script>
<?php include '../../footer.php' ?>