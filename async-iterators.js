// The following table illustrates the differences between the iterators and async iterators:

// #	                        Iterators	                            Async iterators
// Well-known Symbol	        Symbol.iterator	                        Symbol.asyncIterator
// next() return value is	    {value, done }	Promise that resolves to {value, done}
// Loop statement	            for...of	                            for await...of