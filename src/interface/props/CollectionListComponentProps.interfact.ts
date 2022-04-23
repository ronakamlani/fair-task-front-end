import { CollectionInterface } from "../collection.interfact";

export interface ColletionListComponentPropsInterfact{
    collections : CollectionInterface[],
    onReminderClicked:(collection:CollectionInterface)=>void,
    onEditClicked:(collection:CollectionInterface)=>void,
}
