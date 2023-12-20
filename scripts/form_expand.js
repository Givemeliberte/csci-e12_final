// ------------ LOGIC FOR EXPANDING AND COLLAPSING FIELDSETS -------------------------
// INSTRUCTIONS: To make fields expandable
//                 1. Add the class "expandable" to the fieldset element which has sub-options
//                 2. Add the class "expand" to the input element that triggers the expansion of the sub-options
//                 3. That's it. That's litterally all you have to do
//                 -  PREREQS:
//                    -- the elements that trigger the expansion must be in a fieldset
//                    -- the sub-options must be in a fieldset directly underneath (sibling) the main options
//                 - Example of options format
//                       <fieldset class="expandable">
//                          <div class="form-check">
//                              <input class="form-check-input" type="radio" name="signupLocation" id="signupLocationUS" required>
//                              <label class="form-check-label" for="signupLocationUS">US</label>
//                          </div>
//                       </fieldset>

// identify all fieldsets that are expandable [WORKING]
let expandable_fieldsets = document.querySelectorAll(".expandable"); //find expandable fieldsets

// collapse all fieldsets on page load that are expanded [WORKING]
for (let each_expandable_fieldset of expandable_fieldsets) {
  each_expandable_fieldset.classList.add("hide-adjacent");

  // listen for click on all fieldsets that are expandable
  each_expandable_fieldset.addEventListener("click", function (ev) {
    ev.stopPropagation();
    if (ev.target.type === "radio") {
      if (ev.target.classList.contains("expand")) {
        ev.target.parentElement.parentElement.classList.remove("hide-adjacent");

        // make the expanded input required ONLY if the parent field is required
        if (ev.target.required) {
          let expandedOptions =
            ev.target.parentElement.parentElement.nextElementSibling.querySelector(
              "input"
            );
          expandedOptions.required = true;
          console.log(expandedOptions);
        }
      } else {
        ev.target.parentElement.parentElement.classList.add("hide-adjacent");
        // make the expanded input NOT required
        let expandedOptions =
          ev.target.parentElement.parentElement.nextElementSibling.querySelector(
            "input"
          );
        expandedOptions.required = false;
        console.log(expandedOptions);
      }
    }
  });
}
