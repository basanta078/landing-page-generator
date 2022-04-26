import {createContext, ProviderProps, useContext} from 'react';
import { useEditor } from '../hooks/useEditor';
import { SectionComponents } from '../interfaces/sectionTypes';

export type EditorContextInputProps = {
  data: string
}

export type EditorContext = {
  data: string,
  isValid: boolean,
  updateData: React.Dispatch<React.SetStateAction<string>>,
  components: SectionComponents[],
}

const Context = createContext<EditorContext|undefined>(undefined);

export function EditorContextProvider({value, ...props}: ProviderProps<EditorContextInputProps>){
  const {data, setData, isValid, components} = useEditor(value);
  return <Context.Provider value={{
    data,
    isValid,
    updateData: setData,
    components,
  }} {...props} />;
}

export function useEditorContext(): EditorContext{
  const context = useContext(Context);
  if (context == undefined){
    throw new Error('useEditorContext must be used within a EditorContext')
  }
  return context;
}