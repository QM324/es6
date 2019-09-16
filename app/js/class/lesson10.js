{
    let list = new Set();
    list.add(5);
    list.add(7);

    console.log('size', list.size);
}
{
    let arr = [1, 2, 3, 4, 5];
    let list = new Set(arr);
    console.log('size', list.size)
}
{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log(list, 'list');
    let arr = [1, 2, 3, 1, 2, 3];
    let list2 = new Set(arr);
    console.log(list2, "list2");
}
{
    let arr = ['arr', 'delete', 'clear', 'has'];
    let list = new Set(arr);
    console.log('has', list.has('arr'));
    list.delete('arr')
    console.log('delete', list);
    list.clear()
    console.log('clear', list);
}
{
    let arr = ['arr', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    for (let value of list.values()) {
        console.log('values', value);
    }
    for (let [key, value] of list.entries()) {
        console.log('entries', key, value);
    }

    list.forEach(function (item) { console.log(item) })
}
{
    let weakList = new WeakSet(); 
}