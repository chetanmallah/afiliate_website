@@ .. @@
   const teamMembers = [
     {
+      id: "chandan-kumar-mallah",
-      name: "Rohit Sharma",
+      name: "Mr. Chandan Kumar Mallah",
-      role: "Head of E-commerce Strategy",
+      role: "Founder & CEO",
-      description: "Leading marketplace optimization and growth strategies for 200+ brands",
+      description: "Visionary leader with 10+ years in affiliate marketing and e-commerce growth strategies",
       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
+      expertise: ["Affiliate Strategy", "Business Development", "Team Leadership"],
+      experience: "10+ years"
     },
     {
+      id: "priya-patel",
       name: "Priya Patel",
-      role: "SEO & Content Director",
+      role: "Head of Performance Marketing",
-      description: "Driving organic growth through data-driven SEO and content marketing",
+      description: "Expert in affiliate tracking, conversion optimization, and performance analytics",
       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
+      expertise: ["Performance Analytics", "Conversion Optimization", "A/B Testing"],
+      experience: "8+ years"
     },
     {
+      id: "arjun-gupta",
       name: "Arjun Gupta",
-      role: "Influencer Marketing Lead",
+      role: "Technical Director",
-      description: "Building partnerships with 1000+ influencers for maximum brand impact",
+      description: "Leading our technical infrastructure and affiliate platform development",
       image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
+      expertise: ["Platform Development", "API Integration", "Data Analytics"],
+      experience: "12+ years"
     },
   ];
@@ .. @@
         <div className="grid md:grid-cols-3 gap-8">
           {teamMembers.map((member, index) => (
             <div
               key={index}
-              className={`text-center transition-all duration-1000 ${
+              className={`text-center transition-all duration-1000 cursor-pointer group/member ${
                 isIntersecting ? 'animate-slide-up' : 'opacity-0'
               }`}
               style={{ animationDelay: `${index * 200}ms` }}
+              onClick={() => window.location.href = `/experts/${member.id}`}
             >
-              <img 
+              <div className="relative mb-6">
+                <img 
-                src={member.image} 
-                alt={member.name}
-                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
-              />
+                  src={member.image} 
+                  alt={`${member.name} - ${member.role}`}
+                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-xl group-hover/member:scale-105 transition-transform duration-300"
+                />
+                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent group-hover/member:from-primary/30 transition-all duration-300"></div>
+              </div>
-              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
+              <h3 className="text-xl font-bold mb-2 group-hover/member:text-primary transition-colors">{member.name}</h3>
-              <p className="text-primary font-semibold mb-2">{member.role}</p>
+              <p className="text-primary font-semibold mb-3">{member.role}</p>
-              <p className="text-muted-foreground">{member.description}</p>
+              <p className="text-muted-foreground mb-4">{member.description}</p>
+              
+              <div className="space-y-2">
+                <div className="flex flex-wrap justify-center gap-2">
+                  {member.expertise.map((skill, idx) => (
+                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
+                      {skill}
+                    </span>
+                  ))}
+                </div>
+                <p className="text-sm text-muted-foreground font-medium">{member.experience} experience</p>
+              </div>
             </div>
           ))}