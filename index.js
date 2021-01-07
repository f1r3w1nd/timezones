import {html, render} from 'lit-html';
import timezones from './timezones';

import './styles.css';

const countriesTemplate = () => {
    return html`
        <ul>
            ${timezones.map((t) => html`<li>${t.countryName} - ${t.zoneName}</li>`)}
        </ul>
    `
};

const timestampsTemplate = (d = new Date()) => {
    return html`
        <ul>
            ${timezones.map((t) => html`<li>${d.toLocaleTimeString('en-us', { timeZone: t.zoneName, hour12: false})}</li>`)}
        </ul>
    `
};

render(countriesTemplate(), document.getElementById('countries'));

setInterval(() => {
    render(timestampsTemplate(new Date()), document.getElementById('timestamps'));
}, 1000);
