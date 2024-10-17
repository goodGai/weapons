
class Haha {
    value = 0;
    add (num) {
        this.value += num;
        return this;
    }
    sub (num) {
        this.value -= num;
        return this;
    }
    getValue () {
        return this.value;
    }
}

console.log(new Haha().add(3).add(4).add(5).getValue()) // 12
console.log(new Haha().add(3).add(4).sub(5).getValue()) // 2