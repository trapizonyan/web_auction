import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Картины'},
            {id: 2, name: 'Иконы'},
            {id: 3, name: 'Мебель'},
            {id: 4, name: 'Изделия ювелиров'},
            {id: 5, name: 'Вазы'},
            {id: 6, name: 'Фарфор'},
            {id: 7, name: 'Керамика'},
            {id: 8, name: 'Серебро'},
            {id: 9, name: 'Шкатулки'}
        ]
        this._brands = [
            {id: 1, name: '20 век'},
            {id: 2, name: '19 век'},
            {id: 3, name: '18 век'},
            {id: 4, name: '17 век'},
            {id: 5, name: '16 век'},
        ]
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 10
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
