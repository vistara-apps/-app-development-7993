import React, { createContext, useContext } from 'react'
import { createClient } from '@supabase/supabase-js'

// Note: In production, use environment variables
const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'

const supabase = createClient(supabaseUrl, supabaseKey)

const SupabaseContext = createContext(supabase)

export const useSupabase = () => {
  return useContext(SupabaseContext)
}

export const SupabaseProvider = ({ children }) => {
  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  )
}

export { supabase }