# doz-formfield
All form elements component for DOZ

## Install
```
npm install --save doz-formfield
```

Live <a href="https://dozjs-cmp.github.io/doz-formfield/dist/index.html">here</a>

## Usage

Globally
```javascript
import Doz from 'doz'

new Doz({
        root: '#app',
        template(h) {
            return h`
                <div>
                    <doz-formfield type="text" label="Insert your name" name="name" required="true"/>
                </div>
                <div>
                    <doz-formfield type="text" label="Insert your surname" name="surname" required="true"/>
                </div>
                <div>
                    <doz-formfield type="select" label="Male or female" name="select" options='["male","female"]' required="true"/>
                </div>
                <div>
                    <doz-formfield type="textarea" label="Insert a message" name="textarea" required="true"/>
                </div>
            `
        }
    });
```

Locally
```javascript
import Doz from 'doz'
import DozFormfield from 'doz-formfield/lib'

Doz.component('my-wrapper', {
    components: {
        'also-a-custom-name': DozFormfield
    },
    template() {
        return `
            <also-a-custom-name 
                type="checkbox" 
                label="True or flase" name="checkbox" 
                required="true"
            />
        `
    }
});

new Doz({
    root: '#app',
    template: `
        <my-wrapper></my-wrapper>
    `
})
```

## Props
| Name | Default | Description |
| ---- | ------- | ----------- |
| type | text | The type of the component (text, textarea, select, checkbox) |
| name | | Input name |
| classField | | CSS field class |
| value | | The initial value for the component |
| required | false | Set the required field |
| showOpenUrl | false | If the value is a url it gives the possibility to open the link |

## Events

| Name | Args | Description |
| ---- | ------- | ----------- |

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/dozjs-cmp/doz-formfield/blob/master/CHANGELOG.md">here</a>

## License
doz-formfield is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
Pietro Lembo
