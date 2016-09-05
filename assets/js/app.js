// ########################################
/*
*	Table of Contents
*	1)	Initialization of Variables
*     a)  Global
*     b)  Local (with location)
*	2)	Constructors
*     a)
*     b)
*	3)	Prototypes
*     a)
*     b)
*	4)	Objects
*     a)
*     b)
* 5)  Child Functions
*     a) initLoad( )
*     b)
* 6)  Validation Checks
*     a)
*     b)
* 7)  App.js Execution
*/

// ####################################################
/* ---------- Initialization of Variables ---------- */
// ####################################################

/* ---------- a) Global ---------- */

var contactForm = $('#form');
var inputFields = $('.form-control');
var fname = $('#firstname');
var lname = $('#lastname');
var email = $('#email');
var country = $('#country');
var phone = $('#phonenumber');
var zipcode = $('#zipcode');
var street = $('#street');
var contactData = [];

/* ---------- b) Local ---------- */



// #####################################
/* ---------- Constructors ---------- */
// #####################################

/* ---------- a) ContactConstructor ---------- */

function ContactConstructor(array)
{
  this.array = array;
}

// ###################################
/* ---------- Prototypes ---------- */
// ###################################

/* ---------- a) .reset( ) ---------- */

ContactConstructor.prototype.reset = function()
{
  this.array = []; // empty array for creating new contact with from submission.
};

/* ---------- b) createContact( ) ---------- */

ContactConstructor.prototype.createContact = function()
{
  this.fname = this.array[0];
  this.lname = this.array[1];

  $('#contacts').append('<li><a href="#"><span>'+ this.fname + ' ' + this.lname + '</span></a></li>');
};

/* ---------- c) contactCard( ) ---------- */

ContactConstructor.prototype.contactCard = function()
{

  this.fname = this.array[0];
  this.lname = this.array[1];
  this.email = this.array[2];
  this.country = this.array[3];
  this.phone = this.array[4];
  this.zipcode = this.array[5];
  this.street = this.array[6];
  // These are read-only and will be calculated by Google Maps API Geolocation Feature.
    // this.state =
    // this.city =
  console.log('in contactCard');
  // var span = $('.template span').clone();
  // span.find('#fullname').html(this.fname + ' ' + this.lname);
  // span.find('#number').html(this.phone);
  // span.find('#mail').html(this.email);
  // span.find('#address').html(this.street + ', ' + this.city + ', ' + this.state + ' ' + this.zipcode + ' ' + this.country);
  // $('#contactCard #content').append(span);
  console.log('should be showing something');

  $('#fullname').append(this.fname + ' ' + this.lname);
  $('#number').append(this.phone);
  $('#mail').append('<a href="#">' + this.email + '</a>');
  $('#address').append(this.street + ', ' + this.city + ', ' + this.state + ' ' + this.zipcode + ' ' + this.country);
  console.log('is there something there now?');
};

// ################################
/* ---------- Objects ---------- */
// ################################

/* ---------- a) myContact ---------- */

var myContact;

// ########################################
/* ---------- Child Functions ---------- */
// ########################################

/* ---------- a) initLoad ---------- */
function initLoad()
{
  console.log('page load');
  // User submit's form via 'Add' button.
  contactForm.submit(function(event)
  {
    event.preventDefault();
    // get values from every input field and store as individual variables.
    grabData();
    // push individual variables to array.
    contactData.push(fname, lname, email, country, phone, zipcode, street);

    // create new object from array.
    myContact = new ContactConstructor(contactData);
    // empty array for next batch of data.
    contactData = [];
    // clear input fields in HTML.
    inputFields.val('');
    // clear individual variables.
    emptyFrom();
    // create contact in contact list
    myContact.createContact();
    showContactCard();
  });
}

/* ---------- b) grabData ---------- */

function grabData()
{
  fname = fname.val();
  lname = lname.val();
  email = email.val();
  country = country.val();
  phone = phone.val();
  zipcode = zipcode.val();
  street = street.val();
}

/* ---------- c) emptyFrom ---------- */

function emptyFrom()
{
  fname = '';
  lname = '';
  email = '';
  country = '';
  phone = '';
  zipcode = '';
  street = '';
}

/* ---------- c) showContactCard ---------- */

function showContactCard()
{

  $('li').click(function()
  {
    console.log('clicked');
    myContact.contactCard();
  });
}

// ##########################################
/* ---------- Validation Checks ---------- */
// ##########################################

/* ---------- a)  ---------- */

function validateFrom()
{

}

/* ---------- b)  ---------- */



// #########################################
/* ---------- App.js Execution ---------- */
// #########################################

$(document).ready(initLoad);
