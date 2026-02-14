

export class ProductsPage{

    constructor(page) {
        this.page = page;
        this.searchProductTxtbox = page.getByRole('textbox', { name: 'Search Product' });
        this.searchBtn = page.locator('#submit_search');
    }

    async searchProduct(product){
        await this.searchProductTxtbox.fill(product);
        await this.searchBtn.click();
    }

}