function Calculator(id) {
    var self = this;
    this.container = document.getElementById(id);
    this.keys = document.getElementsByClassName('digit');
    
    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.id = "read"; 
    this.input.setAttribute("readonly", true);
    

    this.addition = document.createElement("button");
    this.addition.className = "btn add";
    this.addition.innerHTML = "+";

    this.substraction = document.createElement("button");
    this.substraction.className = "btn substr";
    this.substraction.innerHTML = "-";

    this.division = document.createElement("button");
    this.division.className = "btn divide";
    this.division.innerHTML = "/";

    this.multiplication = document.createElement("button");
    this.multiplication.className = "btn mult";
    this.multiplication.innerHTML = "*";

    this.equals = document.createElement("button");
    this.equals.className = "btn equals";
    this.equals.innerHTML = "=";

    this.clear = document.createElement("button");
    this.clear.className = "btn clear";
    this.clear.innerHTML = "C";

    this.container.appendChild(this.input);  
    this.container.appendChild(this.addition);
    this.container.appendChild(this.substraction);
    this.container.appendChild(this.division);
    this.container.appendChild(this.multiplication);
    this.container.appendChild(this.clear);
    this.container.appendChild(this.equals);

    this.clear.onclick = function() {
        self.input.value = "";
        self.lastValue = ''
    }

    this.addition.onclick = function() {
        self.btn = '+';
    }

    this.lastValue = '';

    for (let index = 0; index < this.keys.length; index++) {
        let element = this.keys[index];
        element.onclick = function() {
            if(self.btn == undefined) {
                self.lastValue = self.lastValue  + element.innerHTML;
                self.input.value = self.lastValue;
            }
            else {
                if(self.btn = '+') {
                    self.input.value = Number(self.lastValue) + Number(element.innerHTML);
                    self.lastValue = self.input.value;
                    self.btn = undefined;
                }
            }
        }     
    }
} 
var calc = new Calculator("container");