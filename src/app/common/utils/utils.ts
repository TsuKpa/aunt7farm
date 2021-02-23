export default class Utils {
    /**
     * Mark ordinal number
     * @param list any[]
     * @returns array with ordinal number from 1
     */
    static remarkOrdinalNumber(list: unknown[]): void {
        if (!list?.length) return;
        let i = 1;
        for (const item of list) {
            item['ordinalNumber'] = i;
            i++;
        }
    }

    /**
     * Scroll to element
     * @param id of element
     */
    static scrollToElement(id: string): void {
        const element = document.getElementById(id);
        if (!element) return;
        element.scrollIntoView({ behavior: 'smooth' });
    }

    /**
     * @returns random id
     */
    static generateRandomId(): string {
        const S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0)
                .toString(16)
                .substring(1);
        };
        return S4() + S4();
    }
}
