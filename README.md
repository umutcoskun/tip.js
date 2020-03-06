Place your tooltip into `data-tip` attribute of the element:

```html
<a href="#" data-tip="You shall not click!">Save</a>
```

Then all you need is:
```javascript
window.$tip.init({
  background: '#212121',
  color: '#FAFAFA',
});
```
