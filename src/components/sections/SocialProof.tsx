import React from 'react';
import { Container } from '../ui/Container';
import { Star, Zap, MessageSquare } from 'lucide-react';

interface TestimonialCard {
  id: string;
  rating: number;
  chatSnippet: {
    user: string;
    message: string;
    tag?: string;
    caption: string;
  };
  quote: string;
  author: {
    name: string;
    role: string;
    initials: string;
  };
  outcomeBadge: string;
}

export const SocialProof: React.FC = () => {
  const testimonials: TestimonialCard[] = [
    {
      id: "1",
      rating: 5,
      chatSnippet: {
        user: "@ThrineStudio",
        message: "Definitely a solid start. Overall it definitely is performing better than expected out of the gate so good job team! Notes acknowledged, process is smooth. Keep it up!",
        tag: "Client review screenshot",
        caption: "Client review screenshot"
      },
      quote: "Impressive performance right out of the gate. The team clearly understands our market, and with the streamlined booking flow, conversions jumped immediately. Confident in the momentum.",
      author: {
        name: "Brendon M.",
        role: "Travel & Tourism",
        initials: "BM"
      },
      outcomeBadge: "+40% Direct Bookings"
    },
    {
      id: "2",
      rating: 5,
      chatSnippet: {
        user: "Client Chat",
        message: "2nd automated order for today! Started to really crank! Way to go Thrine team @Faiz !!",
        tag: "7 min ago",
        caption: "Live order updates"
      },
      quote: "I'm really impressed with the early results. Booking and order processing this quickly, especially after pivoting our customer flow, shows strong engineering execution and real business value.",
      author: {
        name: "Dallin K.",
        role: "Food & Hospitality",
        initials: "DK"
      },
      outcomeBadge: "+180 Monthly Orders"
    },
    {
      id: "3",
      rating: 5,
      chatSnippet: {
        user: "@ThrineStudio",
        message: "Tested the admin portal beyond the initial script, and it performed confidently under load. Really pleased with the results.",
        tag: "Convo review",
        caption: "Convo review screenshot"
      },
      quote: "Tested it beyond the original spec, and it performed confidently under pressure. Replaced three spreadsheets in our first week of operation.",
      author: {
        name: "Jhon S.",
        role: "Logistics & Services",
        initials: "JS"
      },
      outcomeBadge: "Zero Operational Lag"
    },
    {
      id: "4",
      rating: 5,
      chatSnippet: {
        user: "Updates from client chat",
        message: "Such incredible news! Thanks for pushing on this and exciting to see results so quickly! We always see quick results with reactivation.",
        tag: "Feb 22, 4:45 PM",
        caption: "Updates from client chat"
      },
      quote: "Appreciate the dedicated support. Excited to keep improving operational throughput and scaling this custom digital system further!",
      author: {
        name: "Alex P.",
        role: "B2B Outlets",
        initials: "AP"
      },
      outcomeBadge: "Automated Dispatch"
    }
  ];

  return (
    <section id="social-proof" className="py-20 bg-paper border-b border-studio-border font-sans">
      <Container>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-studio-surface border border-studio-border rounded-sm text-xs font-mono font-bold text-terracotta uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>SOCIAL PROOF</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-editorial font-sans tracking-tight">
            Real Feedback from Real Businesses
          </h2>

          <p className="text-sm sm:text-base text-editorial-muted font-normal leading-relaxed">
            What bakery and tour operators say after using their new systems.
          </p>
        </div>

        {/* 3-Column Masonry/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* Column 1 */}
          <div className="space-y-6">
            {[testimonials[0], testimonials[2]].map((item) => (
              <div 
                key={item.id} 
                className="bg-studio-surface border border-studio-border rounded-sm p-6 space-y-4 hover:border-editorial transition-colors"
              >
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-terracotta text-terracotta" />
                  ))}
                </div>

                {/* Chat Snippet Box */}
                <div className="bg-paper border border-studio-border p-4 rounded-sm space-y-2 relative overflow-hidden font-mono text-xs">
                  <div className="flex items-center justify-between text-[10px] text-editorial-muted border-b border-studio-border/60 pb-2">
                    <span className="font-bold text-terracotta">{item.chatSnippet.user}</span>
                    <span>{item.chatSnippet.tag}</span>
                  </div>
                  <p className="text-editorial leading-relaxed text-[11px]">
                    "{item.chatSnippet.message}"
                  </p>
                  <div className="pt-2 text-[9px] uppercase tracking-wider text-editorial-muted text-right font-semibold">
                    {item.chatSnippet.caption}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs text-editorial leading-relaxed font-sans italic text-editorial-muted">
                  “{item.quote}”
                </p>

                {/* Author & Outcome Badge */}
                <div className="pt-4 border-t border-studio-border/80 flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-editorial text-paper font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {item.author.initials}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-editorial font-sans">{item.author.name}</div>
                      <div className="text-[10px] font-mono text-editorial-muted">{item.author.role}</div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-paper border border-studio-border rounded-sm text-[10px] font-mono font-bold text-editorial">
                    <Zap className="w-3 h-3 text-terracotta shrink-0" />
                    <span>{item.outcomeBadge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div 
              key={testimonials[1].id} 
              className="bg-studio-surface border border-studio-border rounded-sm p-6 space-y-4 hover:border-editorial transition-colors"
            >
              {/* 5 Stars */}
              <div className="flex items-center gap-1">
                {[...Array(testimonials[1].rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-terracotta text-terracotta" />
                ))}
              </div>

              {/* Chat Snippet Box */}
              <div className="bg-paper border border-studio-border p-4 rounded-sm space-y-2 relative overflow-hidden font-mono text-xs">
                <div className="flex items-center justify-between text-[10px] text-editorial-muted border-b border-studio-border/60 pb-2">
                  <span className="font-bold text-terracotta">{testimonials[1].chatSnippet.user}</span>
                  <span>{testimonials[1].chatSnippet.tag}</span>
                </div>
                <div className="p-3 bg-studio-surface border border-studio-border/60 rounded-sm text-center font-bold text-editorial text-xs my-2">
                  ⚡ 2nd appt booked today
                </div>
                <p className="text-editorial leading-relaxed text-[11px]">
                  "{testimonials[1].chatSnippet.message}"
                </p>
                <div className="pt-2 text-[9px] uppercase tracking-wider text-editorial-muted text-right font-semibold">
                  {testimonials[1].chatSnippet.caption}
                </div>
              </div>

              {/* Quote */}
              <p className="text-xs text-editorial leading-relaxed font-sans italic text-editorial-muted">
                “{testimonials[1].quote}”
              </p>

              {/* Author & Outcome Badge */}
              <div className="pt-4 border-t border-studio-border/80 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-editorial text-paper font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {testimonials[1].author.initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-editorial font-sans">{testimonials[1].author.name}</div>
                    <div className="text-[10px] font-mono text-editorial-muted">{testimonials[1].author.role}</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-paper border border-studio-border rounded-sm text-[10px] font-mono font-bold text-editorial">
                  <Zap className="w-3 h-3 text-terracotta shrink-0" />
                  <span>{testimonials[1].outcomeBadge}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <div 
              key={testimonials[3].id} 
              className="bg-studio-surface border border-studio-border rounded-sm p-6 space-y-4 hover:border-editorial transition-colors"
            >
              {/* 5 Stars */}
              <div className="flex items-center gap-1">
                {[...Array(testimonials[3].rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-terracotta text-terracotta" />
                ))}
              </div>

              {/* Chat Snippet Box */}
              <div className="bg-paper border border-studio-border p-4 rounded-sm space-y-2 relative overflow-hidden font-mono text-xs">
                <div className="flex items-center justify-between text-[10px] text-editorial-muted border-b border-studio-border/60 pb-2">
                  <span className="font-bold text-terracotta">{testimonials[3].chatSnippet.user}</span>
                  <span>{testimonials[3].chatSnippet.tag}</span>
                </div>
                <p className="text-editorial leading-relaxed text-[11px]">
                  "{testimonials[3].chatSnippet.message}"
                </p>
                <div className="pt-2 text-[9px] uppercase tracking-wider text-editorial-muted text-right font-semibold">
                  {testimonials[3].chatSnippet.caption}
                </div>
              </div>

              {/* Quote */}
              <p className="text-xs text-editorial leading-relaxed font-sans italic text-editorial-muted">
                “{testimonials[3].quote}”
              </p>

              {/* Author & Outcome Badge */}
              <div className="pt-4 border-t border-studio-border/80 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-editorial text-paper font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {testimonials[3].author.initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-editorial font-sans">{testimonials[3].author.name}</div>
                    <div className="text-[10px] font-mono text-editorial-muted">{testimonials[3].author.role}</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-paper border border-studio-border rounded-sm text-[10px] font-mono font-bold text-editorial">
                  <Zap className="w-3 h-3 text-terracotta shrink-0" />
                  <span>{testimonials[3].outcomeBadge}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};
