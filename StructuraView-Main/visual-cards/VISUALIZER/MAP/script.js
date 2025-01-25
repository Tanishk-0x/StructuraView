class MapVisualization {
    constructor() {
        this.map = new Map();
        this.keyValues = [];
        this.render();
    }

    set(key, value) {
        this.map.set(key, value);
        this.updateKeyValues();
    }

    get(key) {
        return this.map.get(key);
    }

    delete(key) {
        this.map.delete(key);
        this.updateKeyValues();
    }

    clear() {
        this.map.clear();
        this.keyValues = [];
        this.render();
    }

    updateKeyValues() {
        this.keyValues = Array.from(this.map.keys()).map(key => {
            const value = this.map.get(key);
            return { key, value };
        });
        this.render();
    }

    render() {
        const mapContainer = document.getElementById('map-container');
        mapContainer.innerHTML = '';
        this.keyValues.forEach(({ key, value }) => {
            const keyValueElement = document.createElement('div');
            keyValueElement.className = 'key-value';
            const keyElement = document.createElement('div');
            keyElement.className = 'key';
            keyElement.textContent = key;
            keyValueElement.appendChild(keyElement);
            const valueElement = document.createElement('div');
            valueElement.textContent = value;
            keyValueElement.appendChild(valueElement);
            mapContainer.appendChild(keyValueElement);
        });
    }
}

const mapVisualization = new MapVisualization();

document.getElementById('set-btn').addEventListener('click', () => {
    const key = document.getElementById('key-input').value;
    const value = document.getElementById('value-input').value;
    mapVisualization.set(key, value);
    document.getElementById('key-input').value = '';
    document.getElementById('value-input').value = '';
});

document.getElementById('get-btn').addEventListener('click', () => {
    const key = document.getElementById('get-key-input').value;
    const value = mapVisualization.get(key);
    if (value !== undefined) {
        alert(`Value for key ${key} is ${value}`);
    } else {
        alert(`Key ${key} not found`);
    }
    document.getElementById('get-key-input').value = '';
});

document.getElementById('delete-btn').addEventListener('click', () => {
    const key = document.getElementById('delete-key-input').value;
    mapVisualization.delete(key);
    document.getElementById('delete-key-input').value = '';
});

document.getElementById('clear-btn').addEventListener('click', () => {
    mapVisualization.clear();
});