@@ .. @@
               className={`group relative p-8 rounded-2xl transition-all duration-700 hover:shadow-2xl border border-border/50 backdrop-blur-sm ${
                 isIntersecting ? 'animate-slide-up' : 'opacity-0'
               }`}
               style={{ 
                 animationDelay: `${index * 100}ms`,
-                background: `linear-gradient(135deg, ${feature.gradient.from}08 0%, ${feature.gradient.to}08 100%)`
+                background: `linear-gradient(135deg, ${feature.gradient.from}15 0%, ${feature.gradient.to}15 100%)`
               }}
             >
               <div className="mb-6">
-                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 animate-float`}
+                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 animate-float shadow-lg`}
                      style={{ 
-                       background: `linear-gradient(135deg, ${feature.gradient.from} 0%, ${feature.gradient.to} 100%)`,
+                       background: `linear-gradient(135deg, ${feature.gradient.from} 0%, ${feature.gradient.to} 100%)`,
                        animationDelay: `${index * 200}ms`
                      }}>
-                  <feature.icon className="text-white h-8 w-8 group-hover:rotate-12 transition-transform duration-300" />
+                  <feature.icon className="text-white h-8 w-8 group-hover:rotate-12 transition-transform duration-300 drop-shadow-sm" />
                 </div>
@@ .. @@
               <div className="pt-6 border-t border-border/30">
-                <button className="inline-flex items-center text-primary hover:text-accent font-semibold transition-colors group/btn">
+                <button 
+                  onClick={() => window.location.href = `/services/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
+                  className="inline-flex items-center text-primary hover:text-accent font-semibold transition-all duration-300 group/btn hover:gap-3"
+                >
                   Learn More
                   <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
                 </button>