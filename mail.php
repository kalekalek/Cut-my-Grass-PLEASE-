<?php

if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $date = $_POST['date'];
 $errorEmpty =false;
 $errorDate =false;

 if (empty($name) || empty($date)){
  echo "<span class='form-error'>Fill in all fields!</span>";
  $errorEmpty =true;
 }
elseif (!filter_var($date, FILTER_VALIDATE_DATE)) {
    echo "<span class='form-error'>Write a valid Date!</span>";
    $errorEmpty =true;
}
else {
    echo "<span class='form-success'>Fill in all fields!</span>";
}

}
else {

    echo "There was an error!";
}
?>

<script >
$("#mail-name, #mail-date").removeClass("input-error");

   var errorEmpty = "<?php echo $errorEmpty; ?>";
   var errorDate = "<?php echo $errorDate; ?>";

   if (errorEmpty == true) {
      $("#mail-name, #mail-date").addClass("input-error")
   }
   if (errorDate == true) {
      $(" #mail-date").addClass("input-error")
   }
   if (errorEmpty == false && errorMail == false) {
       $("#mail-name, #mail-date").val("");


   }
</script>