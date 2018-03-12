export class BarsModel{
    private buttons: any[]
    private bars: any[];
    private limit:number;

    constructor(bars){
        this.buttons = bars.buttons,
        this.bars = bars.bars,
        this.limit = bars.limit
    }

    public getLimit = () => {
        return this.limit;  
    }
    public getButtons = () => {
        return this.buttons;  
    }
    public getBars = () => {
        return this.bars;  
    }
}