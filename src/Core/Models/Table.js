export default class TableModel {
    constructor(
        {
            responsive = true, 
            height = '', 
            defaultSortKey  = '', 
            sortDirection = 'asc', 
            tableBody = [], 
            tableHeader = []
        }
    ) {
        this.responsive = responsive;
        this.height = height;
        this.defaultSortKey = defaultSortKey;
        this.sortDirection = sortDirection;
        this.tableBody = tableBody;
        this.tableHeader = tableHeader;
    }
}

export class TableHeader {
    constructor(
        {
            title = '',
            columnKey = '',
            classes = '',
            columnAlign = 'center',
            colspan = 1,
            rowspan = 1,
            sortable = false,
            columnShrink = false,
            columnVisibility = true,
            columnStickyPosition = '',
            columnWidth = '',
            columnCustomComponent = '',
            order = 1,

        }
                
    ) {
        this.title = title;
        this.columnKey = columnKey;
        this.classes = classes;
        this.columnAlign = columnAlign;
        this.colspan = colspan;
        this.rowspan = rowspan;
        this.sortable = sortable;
        this.columnShrink = columnShrink;
        this.columnVisibility = columnVisibility;
        this.columnStickyPosition = columnStickyPosition;
        this.columnWidth = columnWidth;
        this.columnCustomComponent = columnCustomComponent;
        this.order = order;
    }
}