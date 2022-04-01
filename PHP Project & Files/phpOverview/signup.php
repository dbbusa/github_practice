<?php include '../../header.php' ?>
<section id="mainSection">
    <div class="row">
        <?php include '../sidebar.php' ?>
        <div class="main phpinfo">
            <div class="row justify-content-center mt-2">
                <div class="card shadow">
                    <div class="card-header">Registration Form</div>
                    <div class="card-body">
                        <form action="" onsubmit="return validateAllRegister('resForm')">
                            <div class="row justify-content-center">
                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="firstname">First Name</label>
                                        <input type="text" name="firstname" id="firstname" onblur="validateRequiredFiels('firstname','errMsgFName')" class="form-control" placeholder="First Name" />
                                        <small class="text-danger" id="errMsgFName"></small>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="lastname">Last Name</label>
                                        <input type="text" name="lastname" id="lastname" class="form-control" onblur="validateRequiredFiels('lastname','errMsgLName')" placeholder="Last Name" />
                                        <small class="text-danger" id="errMsgLName"></small>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="text" name="email" id="email" onblur="validateEmail('email','errMsgEmail')" class="form-control" placeholder="Email Address" />
                                        <small class="text-danger" id="errMsgEmail"></small>
                                    </div>
                                </div>

                            </div>

                            <div class="row justify-content-center mt-3">

                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="username">Username</label>
                                        <input type="text" name="username" id="username" onblur="validateUsername('username','errMsgUsername')" class="form-control" placeholder="Username" />
                                        <small class="text-danger" id="errMsgUsername"></small>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="text" name="password" id="password" onblur="validatePassword('password','errMsgPass')" class="form-control" placeholder="Password" />
                                        <small class="text-danger" id="errMsgPass"></small>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="repassword">Re-Password</label>
                                        <input type="text" name="repassword" id="repassword" onblur="validateRePassword('repassword','password','errMsgRePass')" class="form-control" placeholder="Re-Password" />
                                        <small class="text-danger" id="errMsgRePass"></small>
                                    </div>
                                </div>

                            </div>

                            <div class="row justify-content-center mt-3">

                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="dob">Date of Birth</label>
                                        <input type="date" name="dob" id="dob" class="form-control" onblur="validateDateDOB('dob','errMsgDob')" placeholder="DD-MM-YYYY" />
                                        <small class="text-danger" id="errMsgDob"></small>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="website">Website</label>
                                        <input type="text" name="website" id="website" onblur="validateRequiredFiels('website','errMsgWeb')" class="form-control" placeholder="Website" />
                                        <small class="text-danger" id="errMsgWeb"></small>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="age">Age</label>
                                        <input type="text" name="age" id="age" onblur="validateAge('age','errMsgAge')" class="form-control" placeholder="Age" />
                                        <small class="text-danger" id="errMsgAge"></small>
                                    </div>
                                </div>

                            </div>

                            <div class="row justify-content-center mt-3">

                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="phone">Phone Number</label>
                                        <input type="text" name="phone" id="phone" onblur="validatePhone('phone','errMsgPhone')" class="form-control" placeholder="Phone Number" />
                                        <small class="text-danger" id="errMsgPhone"></small>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="address">Address</label>
                                        <input type="text" name="address" id="address" onblur="validateRequiredFiels('address','errMsgaddress')" class="form-control" placeholder="Address" />
                                        <small class="text-danger" id="errMsgaddress"></small>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="post">Post Code</label>
                                        <input type="text" name="post" id="post" onblur="validateRequiredFiels('address','errMsgAddress')" class="form-control" placeholder="Post Code" />
                                        <small class="text-danger" id="errMsgAddress"></small>
                                    </div>
                                </div>

                            </div>

                            <div class="row justify-content-center mt-3">

                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="country">Country</label>
                                        <select class="form-control" name="country" id="country" onblur="validateRequiredFiels('country','errMsgCountry')" >
                                            <option value="" selected disabled>Select Country...</option>
                                            <option value="IND">India</option>
                                            <option value="US">United States</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="UAE">United Arab Emirates</option>
                                        </select>
                                        <small class="text-danger" id="errMsgCountry"></small>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="state">State</label>
                                        <select class="form-control" name="state" id="state" onblur="validateRequiredFiels('state','errMsgState')">
                                            <option value="" selected disabled>Select State...</option>
                                            <option value="GJ">Gujarat</option>
                                            <option value="MH">Maharashtra</option>
                                            <option value="RJ">Rajasthan</option>
                                            <option value="PB">Punjab</option>
                                        </select>
                                        <small class="text-danger" id="errMsgState"></small>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 pe-2">
                                    <div class="form-group">
                                        <label for="city">City</label>
                                        <select class="form-control" name="city" id="city" onblur="validateRequiredFiels('city','errMsgCity')">
                                            <option value="" selected disabled>Select City...</option>
                                            <option value="rajkot">Rajkot</option>
                                            <option value="surat">Surat</option>
                                            <option value="mumbai">Mumbai</option>
                                            <option value="pune">Pune</option>
                                        </select>
                                        <small class="text-danger" id="errMsgCity"></small>
                                    </div>
                                </div>

                            </div>

                            <div class="row justify-content-start mt-3">
                                <button class="btn btn-primary w-auto"> Sign Up </button>

                                <small class="text-center text-danger" id="resForm"></small>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted fw-bold">Already Have Account? <a href="signin.php" class="text-text-decoration-none text-primary">Login</a> </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script src="<?php echo $path.'assets/js/validation.js' ?>"></script>
<?php include '../../footer.php' ?>